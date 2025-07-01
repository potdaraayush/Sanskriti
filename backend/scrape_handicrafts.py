import requests
from bs4 import BeautifulSoup
import pandas as pd
import time

headers = {'User-Agent': 'Mozilla/5.0'}

def scrape_itokri(base_url, max_pages=5):
    items = []
    for page in range(1, max_pages + 1):
        url = f"{base_url}?page={page}"
        resp = requests.get(url, headers=headers)
        if resp.status_code != 200:
            print(f"[iTokri] Page {page}: HTTP {resp.status_code}, stopping.")
            break

        soup = BeautifulSoup(resp.text, 'html.parser')
        cards = soup.select('.grid__item')

        print(f"[iTokri] Page {page}: Found {len(cards)} items.")
        if not cards:
            break

        for c in cards:
            title = c.select_one('.card__heading')
            price = c.select_one('.price-item--regular')
            img = c.select_one('img')
            link = c.select_one('a')

            items.append({
                'site': 'iTokri',
                'title': title.get_text(strip=True) if title else '',
                'price': price.get_text(strip=True).replace("₹", "").replace(",", "") if price else '',
                'image_url': img.get('src') if img else '',
                'link': 'https://www.itokri.com' + link.get('href') if link and link.get('href').startswith('/') else ''
            })

        time.sleep(1)

    return pd.DataFrame(items)


def scrape_craftsvilla(base_url, max_pages=5):
    items = []
    for page in range(1, max_pages + 1):
        url = f"{base_url}?page={page}"
        resp = requests.get(url, headers=headers)
        if resp.status_code != 200:
            print(f"[Craftsvilla] Page {page}: HTTP {resp.status_code}, stopping.")
            break

        soup = BeautifulSoup(resp.text, 'html.parser')
        cards = soup.select('.grid-product')  # Generic Shopify grid class

        print(f"[Craftsvilla] Page {page}: Found {len(cards)} items.")
        if not cards:
            break

        for c in cards:
            title = c.select_one('.grid-product__title')
            price = c.select_one('.price__regular .money')
            img = c.select_one('img')
            link = c.select_one('a')

            items.append({
                'site': 'Craftsvilla',
                'title': title.get_text(strip=True) if title else '',
                'price': price.get_text(strip=True).replace("₹", "").replace(",", "") if price else '',
                'image_url': img.get('src') if img else '',
                'link': 'https://thecraftsvilla.in' + link.get('href') if link and link.get('href').startswith('/') else ''
            })

        time.sleep(1)

    return pd.DataFrame(items)


def scrape_amazon_handmade(base_url, max_pages=3):
    items = []
    for page in range(1, max_pages + 1):
        url = f"{base_url}{page}"
        resp = requests.get(url, headers=headers)
        if resp.status_code != 200:
            print(f"[Amazon Handmade] Page {page}: HTTP {resp.status_code}, stopping.")
            break

        soup = BeautifulSoup(resp.text, 'html.parser')
        cards = soup.select('div.s-result-item[data-component-type="s-search-result"]')

        print(f"[Amazon Handmade] Page {page}: Found {len(cards)} items.")
        if not cards:
            break

        for c in cards:
            title = c.select_one('h2 span')
            price = c.select_one('span.a-price-whole')
            img = c.select_one('img.s-image')
            link = c.select_one('h2 a')

            items.append({
                'site': 'Amazon Handmade',
                'title': title.get_text(strip=True) if title else '',
                'price': price.get_text(strip=True).replace(",", "") if price else '',
                'image_url': img.get('src') if img else '',
                'link': 'https://www.amazon.in' + link.get('href') if link else ''
            })

        time.sleep(1)

    return pd.DataFrame(items)


if __name__ == '__main__':
    df1 = scrape_itokri("https://www.itokri.com/collections/table-runner-online", max_pages=5)
    df2 = scrape_craftsvilla("https://thecraftsvilla.in/collections/", max_pages=5)
    df3 = scrape_amazon_handmade("https://www.amazon.in/s?i=handmade&rh=n%3A4352828031&page=", max_pages=3)

    all_df = pd.concat([df1, df2, df3], ignore_index=True)
    all_df.to_csv("handicrafts_dataset.csv", index=False)
    print(f"\n✅ Combined dataset saved. Total products: {len(all_df)}")
