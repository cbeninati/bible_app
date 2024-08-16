To start the server run `npm run dev` in the root directory

The environment variables currently are `PORT`, `BIBLE_API_KEY`, `HEBREW_BIBLE_ID`, `GREEK_BIBLE_ID`, and `GROQ_API_KEY`.

The model used is llama-3.1-70b-versatile from the Groq API. Need to do more research on if this is best option (1 hour of research suggests yes).

###Future tasks:
- Configure LLM API calls to best suit use case (temperature, max tokens, top P)
- Add dropdown to select verse range rather than just 1 verse
- Look into streaming LLM output to screen rather than rendering once fully generated (do we need to switch to React?)
  - Generally would want better server side rendering with somewhat lengthy API call/responses
