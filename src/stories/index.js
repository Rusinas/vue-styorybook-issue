import Vue from 'vue'


// This one using regular SASS syntax and it fails
import BrokenButton from '../components/BrokenButton.vue'

// This one using weird stuff — regular css syntax but with lang="sass" and it will compile!
// import UnhealthyButton from '../components/UnhealthyButton.vue'

export default { title: 'Button' }

export const withText = () => '<my-button>with text</my-button>'

export const withEmoji = () => '<my-button>😀 😎 👍 💯</my-button>'

export const asAComponent = () => ({
    components: { 
        BrokenButton,
        // UnhealthyButton
    },
    template: '<my-button :rounded="true">rounded</my-button>'
})