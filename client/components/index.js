/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as Main} from './main'
export {default as Contact} from './contact'
export {default as HomepageHeading} from './heading.js'
export {Login, Signup} from './auth-form'
