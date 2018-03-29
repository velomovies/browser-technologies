(function () {
  if ('querySelector' in document &&
    'classList' in document.body &&
    'addEventListener' in window) {

    var main = document.querySelector('main')
    main.classList.add('enhanced')

    var textInput = '<form class="text"><label for="text">Voeg uw eigen ingredienten toe</label><input type="text" id="text" placeholder="Voeg je eigen ingredienten toe"><span class="bar"></span><button>Voeg toe</button></form>'
    main.insertAdjacentHTML('beforeend', textInput)
    var add = document.querySelector('input#text')

    var buttonCreate = document.createElement('button')
    var text = document.createTextNode('Print deze boodschappenlijst')
    buttonCreate.appendChild(text)
    document.body.appendChild(buttonCreate)

    var buttonOwnInput = document.querySelector('.text button')
    var formFieldset = document.querySelector('.extra')
    var number = 0;

    function printPage() {
      window.print()
    }

    function addText(e) {
      var textValue = document.querySelector('.text input').value
      var fieldset = document.querySelector('.eigen')
      number++

      e.preventDefault()

      if (!fieldset && textValue) {
        var ownInput = '<fieldset class="eigen" id="eigen"><legend>Eigen ingredienten</legend><input type="checkbox" id="' + textValue + '" checked><label for="' + textValue + '">' + textValue + '</label></fieldset>'
        formFieldset.insertAdjacentHTML('afterend', ownInput)
      } else if (fieldset && textValue) {
        var ownInput = '<input type="checkbox" id="' + textValue + number + 'eigen" checked><label for="' + textValue + number + 'eigen">' + textValue + '</label>'
        fieldset.insertAdjacentHTML('beforeend', ownInput)
      }
    }

    buttonCreate.addEventListener('click', printPage)

    buttonOwnInput.addEventListener('click', function (e) {
      addText(e)
    })

  }

  if ('webkitSpeechRecognition' in window &&
      location.protocol === 'https:') {
    document.body.insertAdjacentHTML('beforeend', '<button class="voice-rec"><span>Spreek in (engels)</span></button>')
    var voiceRec = document.querySelector('.voice-rec')

    var grammar = '#JSGF V1.0; grammar directions; public <direction> = bread | meat | cheese | extra | add | own | print;'

    var recognition = new webkitSpeechRecognition()
    var speechRecognitionList = new webkitSpeechGrammarList()

    speechRecognitionList.addFromString(grammar, 1)
    recognition.grammars = speechRecognitionList
    recognition.interimResults = true
    recognition.continuous = true
    recognition.lang = 'en-US'

    voiceRec.onclick = function () {
      var voiceRecListen = document.querySelector('.listen')
      voiceRec.classList.toggle('listen')
      if(voiceRecListen) {
        recognition.stop()
      } else {
        recognition.start()
      }
    }

    recognition.onresult = function (event) {
      var last = event.results.length - 1
      var guess = event.results[last][0].transcript.trim().toLowerCase()
      console.log(guess)

      if (guess === 'bread' || guess === 'brett' || guess === 'brad') {
        window.location = 'index.html#brood'
      } else if (guess === 'cheese') {
        window.location = 'index.html#kaas'
      } else if (guess === 'meat' || guess === 'meet') {
        window.location = 'index.html#vlees'
      } else if (guess === 'extra') {
        window.location = 'index.html#extra'
      } else if (guess === 'own') {
        window.location = 'index.html#eigen'
      } else if (guess === 'add' || guess === 'at' || guess === 'ed') {
        add.focus()
      } else if (guess === 'print') {
        window.print()
      }
    }

    recognition.onerror = function (event) {
      console.log('Error occurred in recognition: ' + event.error)
    }
  }

})()