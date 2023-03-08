export class Firebase {

    constructor () {

        this.init()

    }

    init () {

        const firebaseConfig = {
            apiKey: "AIzaSyD4wDeqlpanqLFwQ-J-y8s7VyoFfnPTftE",
            authDomain: "whatsapp-clone-bcd3f.firebaseapp.com",
            projectId: "whatsapp-clone-bcd3f",
            storageBucket: "whatsapp-clone-bcd3f.appspot.com",
            messagingSenderId: "895279050794",
            appId: "1:895279050794:web:0e6b4d799e847304f9d353"
          };

          if (!window._initializedFirebase) {

              firebase.initializeApp(firebaseConfig)

              firebase.firestore().settings({
                timestampsInSnapshot: true
              })
              if (firebase) {

              }

              window._initializedFirebase = true

          }


    }

    static db () {

        return firebase.firestore()

    }

    static hd () {

        return firebase.storage()

    }

    initAuth () {

        return new Promise((s,f) => {

            let provider = new firebase.auth.GoogleAuthProvider()

            firebase.auth().signInWithPopup(provider)
            .then(result => {

                let token = result.credential.accessToken
                let user = result.user

                s({
                    user,
                    token
                })

            })

        })

    }

}