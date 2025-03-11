import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  public async showAllUsers({ view }: HttpContext) {
    const users = await User.all()
    return view.render('pages/show_all_user', { users })
  }
  public async createUser({ view }: HttpContext) {
    return view.render('pages/create_user')
  }
  public async storeUser({ request, response }: HttpContext) {
    const { userName, email } = request.all()
    try {
      await User.create({ username: userName, email: email })
      return response.redirect().toRoute('users.showAllUsers')
    } catch (error) {
      return response.badRequest({ error: error.message })
    }
  }
}
