import html.parser
import re

class HTMLFilter(html.parser.HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = ''
    
    def handle_data(self, data):
        self.text += data + ' '

if __name__ == '__main__':
    with open(r'C:\Users\Windows\.gemini\antigravity\brain\5bd3594b-84e6-470e-9982-effb9069be5b\.system_generated\steps\125\content.md', 'r', encoding='utf-8') as f:
        content = f.read()
    
    parser = HTMLFilter()
    parser.feed(content)
    
    cleaned = re.sub(r'\s+', ' ', parser.text).strip()
    
    # We want to find the events of the cosmic calendar. Let's look for month names and events.
    # We can also just print out the relevant parts or the whole thing and search.
    # Let's save the cleaned text to a file so we can view it.
    with open('wiki_cleaned.txt', 'w', encoding='utf-8') as f:
        f.write(cleaned)
    print("Done writing to wiki_cleaned.txt")
