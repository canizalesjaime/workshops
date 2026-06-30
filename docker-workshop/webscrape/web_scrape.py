# web scraping is collecting info from underlying html code of a website.
from bs4 import BeautifulSoup
import requests


# Sending a GET request
response = requests.get('https://facebook.com')
#print(response.status_code)  # HTTP status code
#print(response.text)  # Response content
soup = BeautifulSoup(response.content, 'html.parser')
# Extracting specific elements
title = soup.find('title').text
print(f"Page Title: {title}")

links = soup.find_all('a')
for link in links:
    print(link['href'])


#Sending a POST request with data
# data = {'key': 'value'}
# response = requests.post('https://example.com/api', data=data)
# #print(response.json())  # If the response is JSON
# print(response)

# data = {'title': 'Prime is right', 'body': 'woahh', 'userId': 8,}
# response = requests.post('https://jsonplaceholder.typicode.com/posts', json=data)
# print(response.status_code)
# print(response.json())