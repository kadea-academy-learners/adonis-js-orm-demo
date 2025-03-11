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
const UsersController = () => import('#controllers/users_controller')

router.get('/', [FrontOfficesController, 'homePage']).as('home')
router.get('/about', [FrontOfficesController, 'aboutPage']).as('about')
router.get('/contact', [FrontOfficesController, 'contactPage']).as('contact')
router.get('/services', [FrontOfficesController, 'servicesPage']).as('services')
router.get('/blog', [FrontOfficesController, 'blogPage']).as('blog')

router.get('/user/show-all', [UsersController, 'showAllUsers']).as('showAllUsers')
router.get('/user/create', [UsersController, 'createUser']).as('createUser')
router.post('/user/store', [UsersController, 'storeUser']).as('storeUser')
router.get('/user/:id/delete', [UsersController, 'deleteUser']).as('deleteUser')
