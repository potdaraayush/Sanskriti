import pandas as pd
from sklearn.ensemble import IsolationForest
from sklearn.preprocessing import StandardScaler

def detect_spam_listings(artworks):
    # Convert input list of dicts into a DataFrame
    df = pd.DataFrame(artworks)

    # Feature engineering
    df['title_length'] = df['title'].apply(lambda x: len(x.strip()))
    df['description_length'] = df['description'].apply(lambda x: len(x.strip()))

    # Prepare features
    X = df[['title_length', 'description_length', 'price']]
    X_scaled = StandardScaler().fit_transform(X)

    # Train Isolation Forest
    model = IsolationForest(contamination=0.2, random_state=42)
    df['is_anomaly'] = model.fit_predict(X_scaled)  # -1 = anomaly

    # Return flagged records
    return df[df['is_anomaly'] == -1].to_dict(orient='records')
