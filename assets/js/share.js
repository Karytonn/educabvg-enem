function share() {
    navigator.share({
        title: 'Educa BVG - ENEM',
        text: 'Portal de estudos para o ENEM',
        url: location.href,
    
        fbId: '1577784855570134',
        hashtags: 'enem,belavistadegoias,goias,educabvg'
      },
      {
        // change this configurations to hide specific unnecessary icons
        copy: true,
        email: true,
        print: true,
        sms: true,
        messenger: true,
        facebook: true,
        whatsapp: true,
        twitter: true,
        linkedin: true,
        telegram: true,
        skype: true,
        language: 'pt' // specify the default language
      }
    )
      .then( _ => console.log('Yay, you shared it :)'))
      .catch( error => console.log('Oh noh! You couldn\'t share it! :\'(\n', error));
}