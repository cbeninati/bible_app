## To start
Navigate to the client directory and run `npm start` to start the React server.

Run `npm run dev` in the server directory to start the backend server

# Future tasks:
## Backend:
- Configure LLM API calls to best suit use case (temperature, max tokens, top P)
- Improve prompt engineering to not include unnecessary/redundant answer portions. Maybe focus on getting just bullet points
- (Idea) It would be cool if there was an option for users to select from multiple choices on what they want insight on from the LLM. Some options might be:
  - Language: this is current config and focuses on the meaning of the words/phrases in the original greek or hebrew
  - Relation: this could be how the passage relates to the rest of the Bible. It might include any references that exist to other portions of scripture or how key words are used elsewhere in scripture. Would need to flesh this out more.
  - Cultural context: this might give insight to the cultural context in which that passage exists. The characteristics of the society, what was important to those people, what lens was it viewed through, etc.

## Frontend:
- Add dropdown to select verse range rather than just 1 verse
- Cache chapter data
- Styling
  - Make it look like ours (css and html layouts)
  - Come up w name
- ~~Look into streaming LLM output to screen rather than rendering once fully generated (do we need to switch to React?)~~
  - Generally would want better server side rendering with somewhat lengthy API call/responses

### Other notes:
The environment variables currently are `PORT`, `BIBLE_API_KEY`, `HEBREW_BIBLE_ID`, `GREEK_BIBLE_ID`, and `GROQ_API_KEY`.

The model used is llama-3.1-70b-versatile from the Groq API. Need to do more research on if this is best option (1 hour of research suggests yes).

The frontend is now in React, no more EJS.

## Milestones/ updates:
8/29: incorporated `react-query` to handle data caching. When chapter text is rendered at `/verses`, the API response is cached with the chapter_id as the cache key. When a new translation is selected the cache will be cleared.

`react-query` dev tools is rendered in `index.js` to help with debugging.

8/30: No more API call at `/`, a subset of english translations saved in the backend is rendered

8/31: New CSS styles; work in progress. 
Frontend now uses an environment variable for the server URL, so create a .env file with `REACT_APP_SERVER_URL="http://localhost:4000"` in /client
