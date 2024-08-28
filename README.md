## To start
Navigate to the client directory and run `npm start` to start the React server.

Run `npm run dev` in the server directory to start the backend server

### Future tasks:
- Configure LLM API calls to best suit use case (temperature, max tokens, top P)
- Add dropdown to select verse range rather than just 1 verse
- ~~Look into streaming LLM output to screen rather than rendering once fully generated (do we need to switch to React?)~~
  - Generally would want better server side rendering with somewhat lengthy API call/responses

### Other notes:
The environment variables currently are `PORT`, `BIBLE_API_KEY`, `HEBREW_BIBLE_ID`, `GREEK_BIBLE_ID`, and `GROQ_API_KEY`.

The model used is llama-3.1-70b-versatile from the Groq API. Need to do more research on if this is best option (1 hour of research suggests yes).

The frontend is now in React, no more EJS.
