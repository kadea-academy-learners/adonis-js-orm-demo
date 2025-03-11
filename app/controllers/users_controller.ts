import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  public async showAllUsers({ view }: HttpContext) {
    const users = await User.all()
    return view.render('pages/show_all_user', {
      pageTitle: 'Show All Users',
      pageDescription: 'Blogoss the best trip blog in kinshasa',
      users: users,
    })
  }
  public async createUser({ view }: HttpContext) {
    return view.render('pages/create_user', {
      pageTitle: 'Sign Up',
      pageDescription: 'Blogoss the best trip blog in kinshasa',
    })
  }
  public async storeUser({ request, response }: HttpContext) {
    const { userName, email } = request.all()
    try {
      await User.create({ username: userName, email: email })
      return response.redirect().toRoute('showAllUsers')
    } catch (error) {
      return response.badRequest({ error: error.message })
    }
  }
  public async deleteUser({ params, response }: HttpContext) {
    const { id } = params
    try {
      const user = await User.findOrFail(id)
      await user.delete()
      return response.redirect().toRoute('showAllUsers')
    } catch (error) {
      return response.badRequest({ error: error.message })
    }
  }
}
