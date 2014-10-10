var React = require('react');

// down the rabbit hole we go...
module.exports = [
  {
    title: 'Introduction: How many users?',
    screens: ['instruction', 'terminal', 'settings'],
    hints: [
      'Use Curl'
    ],
    cards: [
      {
        content: <div className='inner'>
          <h1>Hi, Chris!</h1>
          <p>Ride by ride, we’re changing the way our world works. We imagine a world where cities feel small again. Where transportation and tech bring people together, instead of apart. We see the future as community-driven — and it starts with you.</p>
          <img src='img/moustache.png' alt='Lyft moustache' />
        </div>
      }, {
        content: <div className='inner'>
          <p>We&#8217;re working on Google scale engineering<br />challenges with the speed of a startup.</p>
          <p>With your background in <strong>Node.js</strong>, we think that<br />you&#8217;ll make a great infrastructure engineer!</p>
          <p>Today we&#8217;re going to walk you through a few situations that you might come across on the job.</p>
        </div>
      }, {
        content: <div className='inner'>
        <p>Our infrastructure engineers work on:</p>
          <ul>
            <li>Race conditionsin a real-time server environment</li>
            <li>Complex, predictive matching algorithms with machine learning</li>
            <li>Custom recruitment, onboarding and scheduling tools</li>
            <li>Integration with 3rd party services for identity, payment, notifications and monitoring</li>
            <li>Optimizing data layout in a schema-less database environment</li>
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
          <p>To figure out how many users Lyft currently has.</p>
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
          <p>You can use the Hint button at any time to<br />steer you in the right direction.</p>
          <p>Try to use it sparingly; we want to see how <em>you</em> solve problems.</p>
        </div>
      }, {
        focus: '.topBar .left',
        content: <div className='inner'>
          <p>If you ever need to see these cards again, just<br />click the Lyft logo in the top left.</p>
        </div>
      }, {
        focus: '.instructionTab, .terminalTab',
        content: <div className='inner'>
          <p>Alright, time to get started!</p>
          <p>Remember, we&#8217;re looking for <strong>how many users Lyft currently has</strong>. Our API will be available at the internal address <strong>172.17.42.1</strong> on port <strong>49100</strong>. You&#8217;ll find everything else in the info pane.</p>
          <img src='img/moustache.png' alt='Lyft moustache' />
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
        content: <div className='inner'>
          <p>You are in the second set!</p>
        </div>
      }
    ]
  }
];
