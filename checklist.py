import streamlit as st
import google.generativeai as genai
import os

from IPython.display import display
from IPython.display import Markdown

from dotenv import load_dotenv

load_dotenv()  # load all our environment variables

genai.configure(api_key="AIzaSyAUV0qh7tfsK1cwWWr3c9fxk6NS17UWPyE")


def get_gemini_response(question):
    model = genai.GenerativeModel('gemini-pro')
    response = model.generate_content(question)
    return response.text



# streamlit app
st.title("Agricultural Compliance")
st.text("Ask a Question and Get Expert Advice")

question_input = st.text_area("Ask your question")
prompt=f"""
    You are a agricultural compliance expert and help me with
    {question_input} in point wise format
    """
submit = st.button("Ask")

if submit:
    if question_input:
        response = get_gemini_response(prompt)

        # Display results
        st.subheader("Result:")
        st.text(response)