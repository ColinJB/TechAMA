# AMA

## Description
In the world of programming, there is a relentless stream of questions and concerns. This questions stem from the constant changes in programming languages and concepts; as well as just the vast amount of knowledge needed on any giver subject in order to be a successful and efficient programmer. Luckily, the world of computer programmers is an immensely collaborative space. This application is a question and answer forum where users may ask questions concerning programming; whilst fellow users answer them to the best of their ability.

## Install
  You will need the following things properly installed on your computer.

  * [Git](https://git-scm.com/)
  * [Node.js](https://nodejs.org/) (with NPM)
  * [Bower](https://bower.io/)
  * [Ember CLI](https://ember-cli.com/)
  * [PhantomJS](http://phantomjs.org/)

### Configuration/dependencies

  * Ember framework
  * Bootstrap

  After installing the items above, do the following:

  * `git clone https://github.com/colinjb/AMA.git`
  * `cd AMA` (navigate to correct directory)
  * `npm install`
  * `ember install ember-bootstrap`

## Running / Development

  * `ember serve`
  * Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

  Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

  * `ember test`
  * `ember test --server`

### Building

  * `ember build` (development)
  * `ember build --environment production` (production)

## Specs
  * User can post a question on home page (Question = content, author, additional notes).
  * User can post an answer to a question on that questions page (Answer = content, author).
  * User can edit a question.


3. Integration
  * HBS route (template) for homepage (index)
  * HBS route (template) for question details (question)
    * Question detail page will display question, author, and additional notes; as well as all answers associated with corresponding question.

4. UX/UI
  * Homepage will have list of all questions sorted by most recent, in bootstrap column on leftside; while the right side will have a list of the 10 most popular questions.
  * Question detail page will display the question in large text, with details underneath. Under question details will be a list of answers. Answers will be sorted by most recent.

## Contribute
  * Any and all questions can be sent to colinjbloom113@gmail.com

## License
  **GLP License :copyright: 2017 _Colin Bloom_**
