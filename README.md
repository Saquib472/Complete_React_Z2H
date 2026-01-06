Here you will find Complete React Codes with Study Material And Interviews. Inspired from Namaste React Course.

# 01_Inception : 
Has basic start of React. KEYWORDS : 
- React.createElement , 
- ReactDOM.createRoot , 
- root.render , 
- crossorigin / CORS (Cross Origin Resource Sharing) , 
- CDN , 
- Library vs Framework.

# 02_Igniting_Our_App : 
The topics covered in these are : 
- Bundler , 
- Parcel , 
- npm , 
- npx , 
- package.json , package-lock.json , 
- dependencies vs dev dependencies , 
- code optimization , 
- dev vs production build , 
- node modules , 
- .parcel-cache , 
- dist folder , 
- .gitignore , 
- React using npm , 
- minification , 
- Hot Reloading , 
- HMT , 
- Tree Shacking , 
- browsers list , and more.

# 03_Laying_The_Foundation : 
The Topics or KEYWORDS : 
- JSX , 
- JSX over React.createElement , 
- Advantage of using JSX, 
- How JSX transfers to Browser understandable code , 
- Parcel and Babel doing the Job, 
- COMPONENTS , 
- Functional Components , 
- Component Composition (Component inside Component) , 
- Writting javascript inside JSX using "{}".

# 04_Talk_is_Cheap_Show_Me_The_Code : 
Started with Foody Buddy App building, an Online Food Ordering App. 
- Started with Components Creation , 
- UI design, 
- Header design, 
- Body with small restaurant cards with dynamic details, 
- props, 
- looping through map method.

# 05_Lets_Get_Hooked : 
Continuation of Foody Buddy App. 
- Structured the code files. 
- Created separate Folders. 
- Created src folder and put App.js in it. 
- In src Created Components folder and separate the components. 
- Added utils folder with utilities like CDN links and mock data of restaurant. 
- KEYWORDS : 
    - import and export , 
    - default export/import and named export/import , 
    - Hooks
    - useState() hook , 
    - React is good at DOM manupulation , 
    - As soon as the state changed React rerender the component , 
    - React make the data layer sync with the UI layer , 
    - Virtual DOM , 
    - Reconcilation Algorithm (React fibre) or Dff Algorithm => Comparing the current VDOM with updated VDOM and update the specific change in the Real DOM.

# 06_Exploring_The_World : 
Continuation of Foody Buddy App. TOPICS : 
- Monolithic Architecture vs Microservices , 
- useEffect() Hook , 
- Connecting with external world using APIs , 
- Load -> Render -> API -> Render , 
- Call Swiggy's API to get the Restaurants , 
- CORS ERROR , 
- Allow Cors access controll Extension for chrome , 
- get data using fetch() , 
- Shimmer Effect , 
- Why to use local state variable like useState() , 
- search functionality , 
- input field , 
- Swiggy Dummy data file.

# 07_Finding_The_Path : 
Continuation of Foody Buddy App. 
- Dependency Array 
- rafce 
- routing 
- react-router 
- createBrowserRouter 
- RouterProvider 
- Outlet 
- Link 
* In React page never reloads it change the component that's why it is Single page Application 
- Error , useRouteError() Hook 
- Two types of Routing -> Client Side Routing and Server Side Routing 
- In React as all the components loads in initial so while routing our page not get refreshed so it is Client side Routing 
- Dynamic Routing -> path : '/restaurants/:resId'  
- useParams() Hook 


# 08_Lets_Get_Classy : 
Continuation of Foody Buddy App. 
- Class Based Component 
- class ClassName extends React.Component 
- Class based component Life Cycle 
- constructor() -> super() , render() , componentDidMount() , componentDidUpdate() , componentWillUnmount().

# 09_Optimizing_Our_App : 
Continuation of Foody Buddy App. 
- Custom hooks 
- Created Some Custom hooks --> useFetchMenuData , useOnlineStatus . 
- Chunking/ Code Splitting/ Lazy Loading/ Dynamic Bundling/ On demand Loading/ dynamic import. 
- import { lazy, Suspence } from 'react'

# 10_Jo_Dikhta_Hai_Vo_Bikta_Hai : 
Continuation of Foody Buddy App. Different ways to add CSS => Normal CSS , SCSS and SAPP , Styled Component , Material UI , Ant Design , Chakra UI , Bootstrap , Tailwind CSS.

# 11_Data_Is_The_New_Oil : 
Continuation of Foody Buddy App. 
- Higher Order Component ==> A Component which takes a Component as argument and returns a Component with some modification. 
- Controlled & Uncontrolled Component 
- Lifting The State Up 
- Props Drilling 
- # Context API => 
    - createContext({}) 
    - useContext(Createdcontext) 
    - Fetching Context :  For Class based Component ==> Createdcontext.Consumer (Check AboutUs.js)
    - For Functional Component ==> CreatedContext.Provider (Check App.js) .

# 12_Lets_Build_Our_Store : 
Continuation of Foody Buddy App. Store, Redux Toolkit, Click Add Button -> Dispatch an Action -> Calls Reducer Fucntion -> Updates a Slice of the Store. 
Component Subscribed to Store using Selector. 
- # Steps => 
    - install @reduxjs/toolkit And react-redux 
    - Configure Store : configureStore()
    - Connect React with Redux : Provider
    - Create Slice : createSlice()
    - Dispatch An Action : useDispatch() Hook
    - Subscribe using Selector : useSelector() Hook
- Subscribe to a particularly needed slice reducer. Mutating Way. 

# 13_Time_For_Test : 
Continuation of Foody Buddy App. Types Of Testing (developer) ==> Unit Testing , Integration Testing , End to End Testing (e2e Testing). 
- # Setting Up Testing in App ==> 
    - Install React Testing Library , 
    - Install Jest , 
    - Install Babel dependencies , 
    - Configure Babel (babel.config.js) (This Babel Configuration will conflict with the configuration of Parcel which uses Babel so we have to handle this.) (Configure Parcel config file to disable default babel transpilation -> Parcel Doc --> Javascript --> Parcel --> Babel --> .parcelrc (configure this)) --> 
    - npm run test --> npm init jest@latest 
    - (Jest Configuration ==> The following questions will help Jest to create a suitable configuration for your project
    √ Would you like to use Typescript for the configuration file? ... no
    √ Choose the test environment that will be used for testing » jsdom (browser-like)
    √ Do you want Jest to add coverage reports? ... yes
    √ Which provider should be used to instrument code for coverage? » babel
    √ Automatically clear mock calls, instances, contexts and results before every test? ... yes ), 

    - JS DOM (Like Browser) --> Install JSdom Library (npm install --save-dev jest-environment-jsdom)
    - Install @babel/preset-react - To make the JSX work in test cases. And Add this to babel.config.js
    - Install npm i -D @testing-library/jest-dom
- For Test to be run on update --> "watch-test": "jest --watch" (add this to script of package.json)
- For Test -- render Component , Querying using screen , Assertion using expect .
- Check the __tests__ folder

# 14_NetflixGPT_Project : 
- npx create-react-app NetflixGPT (Uses Webpack bundler)
- Configured Tailwind CSS
- Routing
- Sign in / Sign Up Form
- Toggle to Sign In And Sign Up.
- Form Validation 
- * Use Formik Library for Form Validation If there is a large scale Form Page with lots of input fields.
- useRef() Hook
- Authentication 
- Using Google Firebase for Back End And Deployment.
- # Steps for set up of Google Firebase =>
    - Link for Doc of Firebase -- https://firebase.google.com/docs/web/setup?authuser=0&_gl=1*1cmxn0v*_ga*MzA2MjY4MDIxLjE3NjY0MjY2ODU.*_ga_CW55HF8NVT*czE3NjY1MDI0MTkkbzQkZzEkdDE3NjY1MDI4ODEkajIyJGwwJGgw
    - Create a Project
    - Proceed
    - Register app
    - Add App - web
    - Name for App
    - Set up Firebase to host App Or Not 
    - Add Firebase SDK
    - npm install firebase
    - configure firebase.js config
    - Authentication -> Sign in method -> Email Id Password -> Enable
- # Deploy to Firebase
        - To host your site with Firebase Hosting, you need the Firebase CLI (a command line tool) 
        - npm install -g firebase-tools
        - firebase login
        - firebase init -> Hosting -> ✔ What do you want to use as your public directory? build -> ✔ Configure as a single-page app (rewrite all urls to /index.html)? No -> ✔ Set up automatic builds and deploys with GitHub? No (generate two folders, firebase.json And .firebaserc)
        - npm build (build our App for production deployment)
        - firebase deploy
- # Anthentication for Our App
    - Go to Firebase Documentation -> Doc -> build -> web -> Manage users or Password Authentication.
    - Use Web Modular API
    - As auth is been used almost every where so Add "export const auth = getAuth()" in firebase.js
    - Sign up Logic (Find the Password Authentication -> Create A password based account -> Copy the API and use it.) [Check Login.js Page handleButtonClick function for reference]
    - Sign in Logic (Find the Password Authentication -> Sign in a user with an email address and password -> Copy the API and use it.) [Check Login.js Page handleButtonClick function for reference]

- Set Up Redux to store the User Info.
- Get the currently signed-in user -> using onAuthStateChanged() [Check Body.js for reference]
- useNavigate() Hook.
- Update the user. (updateProfile())
- Sign Out Feature.
- Bug Fixes : Sign Up User display Name and Profile Picture Update.
- Bug Fixes : If the user is not Logged in Redirect the /browse to /login page and Vice-versa.
- Unsubscribed to the onAuthStateChanged callback.
- Add hardcoded values to the constants file.

- # TMDB Movies (Fetching Movies Data from this website API)
    - tmdb website is blocked in India. Do DNS settings.
    - Go to tmdb website
    - Sign Up
    - Create App
    - After Creating App, API Key and API read access token will be generated.
    - Go to Doc of TMDB
    - Go to API Reference
    - MOVIE LISTS (Left Section)
    - LANGUAGE(select JavaScript)
    - Get Data from TMDB Now Playing Movies list API
- Create Slice / Reducer for Now playing Movie List and Store it.
- Create a Custom Hook for the same -> useNowPlayingMovies() Custom Hook.

- # Making Browse Page => 
    - Planning the Design Structure of Browse Page :- 
        - MainContainer
            - VideoBackground
            - VideoTitle
        - SecondaryContainer
            - MovieList * n
                - Moviecard * n
    - Implementation :- 
        - Create two components, MainContainer And SecondaryContainer. And include this in Browse Container.
        - Create VideoBackground and VideoTitle Components. Include this in MainContainer.
        - In MainContainer, get the first movie data from store using useSelector()
            - Make the VideoTitle with that movie Data. (Take title and overview)
            - Make the VideoBackground with that Movie Data. (Take id)
            - Call an API from TMDB Movies Get Video by passing the id. It will return the objects with lots of trailer, teaser etc. data.
            - Filter Out Trailer from there. and use the Youtube Id.
            - Store the id in Movies Slice.
            - Do create a Custom Hook to fetch and store the Trailer Id.
            - Using the Youtube Id , Pass it to Youtube embadded code and use 
            - Fixed the Youtube Autoplay and loop it.
        - SecondaryContainer
            - Create MovieList Component And MovieCard Component.
            - Add MovieList inside the SecondaryContainer Component.
                - Add MovieCard inside MovieList Component.
                - In constants create a Movie Poster CDN to show the Poster Image of Movies.
                - CDN for images can be found in TMDB Guides -> IMAGES -> Guides.
                - Showing Movie List as Movie Card for Now Playing.
                - Custom Hooks created -> 
                    - usePopularMovies() 
                    - useTopRatedMovies()
                    - useUpcomingMovies()
                - Fixed the Design of SecondaryContainer


- # Making GPT Page :- 
    - Create One Button to Header. On click of this botton toggle b/w browse page and gpt search page.
    - Two toggle b/w those two page create a separate Slice in Store. And Use this to toggle.
    - Create GptSearchPage And In GptSearchPage -> 
        - Create Two Components, GptSearchBar And GptMovieSuggestions.
        - Language Change Functionality.
            - Create a constants file for this named languageConstants.js in utils Folder.
            - Create a appConfigSlice to store selected language and more config like Dark/Light Mode.
            - Create an Options of Languages.
    - Adding GPT APIs to Our App.
        - Go to platform.openai.com 
        - Personal -> API Keys 
        - Check npm openai Readme
        - npm i openai
        - create a openai configuration in utils
        - Call Openai API to get Movies
        - Loop over each movie and Call the TMDB API. But have to do Promise.all
        - Store the Movies and the TMDB results in gptSlice.
        - Use this in GptMoviesSuggestions Component and Reuse the MovieList.js to show the TMDB Results.
        - Add removeGptMovieResults on Back To Home button
        - To keep the API Keys Safe create .env and Store the keys there.
        - Memoization
        - Make it Mobile friendly. 


- # Features :-
    - Login/Sign up Page
        - Sign In/Sign up Form
        - redirect to Browse Page
    - Browse Page (After Authentication)
        - Header
        - Main Movie Section
            - Trailer Video in background
            - Title & Description
        - Movie Suggestions
            - Movie List * N
    - NetflixGPT
        - Search Bar
        - Movie Suggestions

# 15_Youtube_Project : 
- Tech Stack =>
    - React.js
    - Redux
    - Tailwind Css
    - react-router
    - bundler - Vite
    - jest , react-testing-library

- Planning =>
    - Header
        - Hamburger Menu (Which Opens and Closes the Side panel)
        - YouTube Logo
        - Search Bar
        - Profile Icon
    - Body
        - Side Bar
            - Links like Home , Shorts , Subscriptions etc.
        - Main Container
            - Button Lists
            - Video Lists
                - Click on a Video It will Open a New Video in /watch Page.
    - /watch Page
        - Video Section
        - Comment Section
        - Video Suggestion Section

- Components Distribution =>
    - Head 
    - Body
        - SideBar
            - MenuItems
        - MainContainer
            - ButtonList
            - VideoContainer
                - VideoCard
    - WatchVideo

- Implementation =>
    - npm create vite@latest
    - Clean up existing code.
    - npm install -D tailwindcss@3 postcss autoprefixer
    - npx tailwindcss init -p
    - Add Paths to tailwind.config.js ("./src/**/*.{js,ts,jsx,tsx}")
    - Add in App.css or index.css 
        - @tailwind base; @tailwind components; @tailwind utilities;
    - Restart vs code and Rerun npm run dev
    - Create components folder inside src
    - Create Head , Body , SideBar , MainContainer , ButtonList , VideoContainer Components.
    - Create a utils folder -> constants file (Store all hardcoded URLs and Links)
    - Head Implementation 🤯
        - Left Section : Hamburger Menu , Youtube Logo
        - Middle Section : Search Input , Search Button
        - Right Section : Icon Logo
    - Body Implementation 🧜‍♂️
        - Side Bar 
            - On click of Hamburger Menu in Header, the sidebar will toggle. 
            - To do this Create Store And a appSlice for all the configuration related state.
            - npm install @reduxjs/toolkit
            - npm install react-redux
            - Configure Store
                - Create store.js 
            - Create appSlice.js having action toggleMenu
            - Provider
            - On click of Hamburger Menu -> dispatch an action toggleMenu -> action call the function -> store will update. SideBar is subscribe to the appSlice.
        - Main Container
            - ButtonList
                - Button
            - VideoContainer
                - Call Youtube API for Videos.
                - Google Search Youtube Video API (Documentation)
                - Google Search Youtube Video API Key Auth (console.cloud.google.com)
                - Enable Youtube video api(search for it there) from console.cloud.google.com
                - Fetch the data from API
                - Create VideoCard Component
                - Higher Order Component
        - Watch Page
            - Create WatchPage Container
            - npm i react-router
            - React Routing (Head and SideBar will be intact And Only MainContainer will be change to WatchPage)
            - Use Link for routing
            - useSearchParams() hook to get the query param And Id of youtube video.
            - use Youtube embadded code iframe.
    - Search Implementation : 🔍
        - Google search for -> Youtube suggestion API in json -> http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query 
        - For search use *Debouncing* 
            - Example:  
                - press key - i
                - render component
                - useEffect()
                - setTimeOut - Start the timer => Make API CALL after 200ms.
                - If user Press key - ip
                - destroy the component ( useEffect return method will be Called.) (In return of useEffect clearTimeOut will be Called which clear the timer.)
                - re-render the component
                - useEffect()
                - setTimeOut - Start the timer => Make API CALL after 200ms.
        - Create a section for search results.
        - Caching / memoizing the search result in store by creating a Slice so that less number of API Calls appens.
        - Create searchSlice.
        - KeyWord : LRU
        - For Cache Check the files : Head.jsx -> useEffect() hook And searchSlice.js
    - Watch Page -> Comment Section : 👍
        - Create Comment Component
        - comment data should look like -> 
            - comments : [
                {
                    name : 'Saquib Ali',
                    text : 'The Video looks cool...',
                    replies : [
                        {
                            name : 'Saquib Ali',
                            text : 'The Video looks cool...',
                            replies : [
                                name : 'Saquib Ali',
                                text : 'The Video looks cool...',
                                replies : [
                                    
                                ]
                            ]
                        },
                        {
                            name : 'Saquib Ali',
                            text : 'The Video looks cool...',
                            replies : [
                                name : 'Saquib Ali',
                                text : 'The Video looks cool...',
                                replies : [
                                    
                                ]
                            ]
                        }
                    ]
                },
                {
                    name : 'Saquib Ali',
                    text : 'The Video looks cool...',
                    replies : [
                        name : 'Saquib Ali',
                        text : 'The Video looks cool...',
                        replies : [
                            
                        ]
                    ]
                }
            ]
        - Use *Recursion* -> See WatchPage And CommentList And Comment
    - Live Chat building :
        - Live Chat >>>>>>> Infinite Scroll >>>>>> Pagination
        - Challenges :- 
            - Get Data Live
            - Update the UI
        - Two way we can handle the Live Data
            - Web Sockets : 
                - Two way Connection established, 
                - It is like a handshake between a Server and a UI.
                - Once connection is build, you can quickly share data from either side.
                - Bydirectional Data, you can send data from UI to Backend also and Backend to UI also.
                - No Regular Interval.
                - Initial Connection takes a little time. Once connected it is very fast and easy to share data.
                - Example - Trading/Stock Market Apps , WhatsApp , 
            - API Polling : 
                - One Directional 
                - UI request data from Backend. 
                - After certain Interval UI keep polling Data from Server.
                - Example - Gmail , Cricbuzz , YouTube Live Stream Chats.