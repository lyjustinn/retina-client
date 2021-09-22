# Harmony
React app designed to interface with the Retina API. Built using TypeScript, Material UI, and Bootstrap. Responsible for displaying images stored on Retina.

This server fetches data from the retina api and is meant to be used in conjunction with [back-end](https://github.com/lyjustinn/retinaapi)

### Installation

#### Local Installation:
1. Download the repository
2. Install [NodeJS](https://nodejs.org/en/ "Install NodeJS") if not done so already
3. Run `npm install`
4. Created a file in the top level directory called `.env` and place the following:
    1. `REACT_APP_API_URL = URL OF YOUR RETINA API`
    2. `REACT_APP_CDN_URL = YOUR AWS CLOUDFRONT URL` 
5. Run `npm start`

