import pandas as pd
from sklearn.ensemble import IsolationForest
from sklearn.preprocessing import StandardScaler

def detect_spam_listings(artworks):
    df = pd.DataFrame(artworks)

    # Fill and clean
    df['title'] = df['title'].fillna('').str.strip()
    df['description'] = df['description'].fillna('').str.strip()
    df['price'] = pd.to_numeric(df['price'], errors='coerce').fillna(0)

    # Features
    df['title_length'] = df['title'].apply(len)
    df['description_length'] = df['description'].apply(len)
    df['title_count'] = df.groupby('title')['title'].transform('count')
    df['price_count'] = df.groupby('price')['price'].transform('count')
    df['high_price'] = df['price'].apply(lambda x: 1 if x > 9999 else 0)

    # Features for model
    X = df[['title_length', 'description_length', 'price', 'title_count', 'price_count', 'high_price']]
    X_scaled = StandardScaler().fit_transform(X)

    model = IsolationForest(contamination=0.2, random_state=42)
    df['is_anomaly'] = model.fit_predict(X_scaled)  # -1 = anomaly

    # Reason logic
    def get_reason(row):
        if row['title_count'] > 1:
            return "Repeated title detected."
        if row['price_count'] > 1:
            return "Repeated price pattern detected."
        if row['high_price'] == 1:
            return "Price exceeds ₹9999."
        return "Unusual pattern detected."

    df['reason'] = df.apply(get_reason, axis=1)

    # Return only flagged entries
    return df[df['is_anomaly'] == -1].to_dict(orient='records')
