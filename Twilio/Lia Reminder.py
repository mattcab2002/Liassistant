" Reminder for patient for screening each week"
" On terminal: "
" pip install schedule "
" pip install twilio "

from twilio.rest import Client
import schedule
import time

account_sid = "ACbc8afc034b83431a445441dc250d3a42"
auth_token = "4ee7ac838a635e400888ba7048b437cd"

client = Client(account_sid, auth_token)

def send_SMS():
    client.messages.create(
            to="+15142664324",
            from_="+18125949492",
            body="Please visit Lia to complete your screening"
    )
    
schedule.every().saturday.at("15:00").do(send_SMS)
while 1:
    schedule.run_pending()
    time.sleep(1)
