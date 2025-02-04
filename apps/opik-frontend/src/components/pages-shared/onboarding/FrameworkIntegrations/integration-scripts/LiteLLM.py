import os, litellm
from litellm.integrations.opik.opik import OpikLogger # HIGHLIGHTED_LINE

# INJECT_OPIK_CONFIGURATION

litellm.callbacks = [OpikLogger()] # HIGHLIGHTED_LINE
response = litellm.completion(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "user", "content": "Write a haiku about AI engineering."}
    ],
)
print(response.choices[0].message.content)
