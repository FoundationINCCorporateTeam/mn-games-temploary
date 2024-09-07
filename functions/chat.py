from transformers import pipeline
import json

def handler(event, context):
    try:
        body = json.loads(event['body'])
        message = body['message']
        
        # Load the model and tokenizer
        chatbot = pipeline('conversational', model='facebook/blenderbot-400M-distill')

        # Get a response
        response = chatbot(message)
        reply = response[0]['generated_text']

        return {
            'statusCode': 200,
            'body': json.dumps({'reply': reply})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }
