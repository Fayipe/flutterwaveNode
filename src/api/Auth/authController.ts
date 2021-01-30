import { AuthService } from './authService';
import { BaseController } from "../baseController";

export class AuthController extends BaseController {
  private _authService = new AuthService();

  /**
      * getUserDetails
      */
  public getUserDetails = async () => {
    const user_details = await this._authService.getUserDetails();
    return this.sendResponse(user_details, 'My Rule-Validation API');
  }
  /**
    * validateRules
    */
  public validateRules = async (data: any) => {
    const vaildate_results = await this._authService.validateRules(data);
    return this.sendResponse(vaildate_results.result, vaildate_results.message, vaildate_results.status);
  }
}
