import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  public async showAllUsers({ view }: HttpContext) {
    const users = await User.all()
    return view.render('pages/show_all_user', { users })
  }
}
