/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const FrontOfficesController = () => import('#controllers/front_offices_controller')

router.get('/', [FrontOfficesController, 'homePage']).as('home')
router.get('/about', [FrontOfficesController, 'aboutPage']).as('about')
router.get('/contact', [FrontOfficesController, 'contactPage']).as('contact')
router.get('/services', [FrontOfficesController, 'servicesPage']).as('services')
router.get('/blog', [FrontOfficesController, 'blogPage']).as('blog')
