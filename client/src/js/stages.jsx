var React = require('react');

// down the rabbit hole we go...
module.exports = [
  {
    title: 'Introduction: How many citizens?',
    screens: ['instruction', 'terminal', 'settings'],
    hints: [
      'Use Curl',
      'Check out the /users endpoint in the info pane'
    ],
    cards: [
      {
        content: <div className='inner'>
          <h1>Hi, Winston!</h1>
          <p>Here at the Ministry of Truth, we&#8217;re redefining what it means to be a citizen of Oceania. We concern ourselves with news media, entertainment, the fine arts and educational books. We&#8217;re second to none in the pursuit of excellence, from the top down.</p>
          <img className='globe' src='img/globe.png' alt='The Ministry of Truth globe' />
        </div>
      }, {
        content: <div className='inner'>
          <p>We&#8217;re working on Ingsoc scale engineering<br />challenges with the speed of a startup.</p>
          <p>With your background in <strong>Node.js</strong>, we think that<br />you&#8217;ll make a great information architecht!</p>
          <p>Today we&#8217;re going to walk you through a few situations that you might come across on the job.</p>
        </div>
      }, {
        content: <div className='inner'>
        <p>Our information architechts work on:</p>
          <ul>
            <li>Complex, predictive matching algorithms with machine learning</li>
            <li>Custom recruitment, onboarding and scheduling tools</li>
            <li>Maintaining and restoring historical documents</li>
            <li>Reducing bloat in our dynamic historical database environment</li>
          </ul>
          <p>We code mostly in Python, but we can get you up to speed in no time.</p>
        </div>
      }, {
        focus: '.instructionTab',
        content: <div className='inner'>
          <p>Let&#8217;s start by trying out our API.</p>
          <p>When the clock starts, you&#8217;ll be able to see our API endpoints in the <strong>info pane</strong> on the left.</p>
          <img src='img/instruction.svg' alt='instruction icon' />
        </div>
      }, {
        focus: '.terminalTab',
        content: <div className='inner'>
          <p>Use the terminal pane:</p>
          <img src='img/terminal.svg' alt='terminal icon' />
          <p>To figure out how many citizens reside in Oceania.</p>
        </div>
      }, {
        focus: '.timeRemaining',
        content: <div className='inner'>
          <p>Just a few more things before we get started...</p>
          <p>Your remaining time is shown in the top right. We&#8217;ve given you over three hours to finish but most candidates don&#8217;t need that long.</p>
        </div>
      }, {
        focus: '.hintButton',
        content: <div className='inner'>
          <p>You can use the <strong>Hint</strong> button at any time to<br />steer you in the right direction.</p>
          <p>Try to use it sparingly; we want to see how <em>you</em> solve problems.</p>
        </div>
      }, {
        focus: '.topBar .left',
        content: <div className='inner'>
          <p>If you ever need to see these cards again, just<br />click the the Ministry of Truth logo in the top left.</p>
          <img className='logo' src='img/logo.png' alt='The Ministry of Truth globe' />
        </div>
      }, {
        focus: '.instructionTab, .terminalTab',
        content: <div className='inner'>
          <p>Alright, time to get started!</p>
          <p>Remember, we&#8217;re looking for <strong>how many citizens live in Oceania</strong>. Our API will be available at the internal address <strong>172.17.42.1</strong> on port <strong>49100</strong>. You&#8217;ll find everything else in the info pane.</p>
          <img className='globe' src='img/globe.png' alt='The Ministry of Truth globe' />
          <p><strong>Good luck!</strong></p>
        </div>
      }
    ]
  },
  {
    title: 'Add an endpoint',
    screens: ['instruction', 'editor', 'settings'],
    cards: [
      {
        focus: '.timeRemaining',
        content: <div className='inner'>
          <p>You got it! Nice!!</p>
          <p>Your timer is paused while we go over the next instructions, so you can relax a little.</p>
        </div>
      },
      {
        focus: '.timeRemaining',
        content: <div className='inner'>
          <p>Now that you&#8217;re familiar with the the Truth API, let&#8217;s try adding to it.</p>
          <p>For starters, let&#8217;s make a simple endpoint called <code>twoplustwo</code> that always returns the number <em><strong>5</strong></em></p>
          <p>We&#8217;re exposing a new <strong>editor pane</strong> so that you can play with the server. The API is written using express.</p>
          <img src='img/editor.svg' alt='editor icon' />
        </div>
      }
    ]
  }
];
