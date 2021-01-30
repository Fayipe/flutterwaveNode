import { AppError } from "../../utils/app-error";

export class AuthService {

    /**
     * getUserDetails
     */
    public getUserDetails = async () => {
        let user = {
            "name": "Taiwo Fayipe",
            "github": "@taiwofayipe",
            "email": "taiwofayipe@gmail.com",
            "mobile": "08139719106",
            "twitter": "@taiwofayipe"
        };
        if (user) {
            return user;
        }
        throw new AppError("Could not fetch user details.");
    }

    /**
     * validateRules
     */
    public validateRules = async (data: any) => {
        const condition = data.rule.condition;
        let message: string;
        let status: string;
        let result;
        let field = data.rule.field;
        switch (condition) {
            case "gte":
                field = field.split('.');
                let count = data.data[field[0]][field[1]];
                if (count) {
                    if (count >= data.rule.condition_value) {
                        message = `field ${data.rule.field} successfully validated.`;
                        status = "success";
                        result = {
                            data: {
                                validation: {
                                    error: false,
                                    field: data.rule.field,
                                    field_value: count,
                                    condition: data.rule.condition,
                                    condition_value: data.rule.condition_value
                                }
                            }
                        }
                    }
                    return { result, message, status }
                }
                break;

            case "eq":
                if (data.data[field]) {
                    if (data.data[field] == data.rule.condition_value) {
                        message = `field ${field} successfully validated.`;
                        status = "success";
                        result = {
                            data: {
                                validation: {
                                    error: false,
                                    field: `${data.rule.field}`,
                                    field_value: 'd',
                                    condition: "eq",
                                    condition_value: "a"
                                }
                            }
                        };
                    } else {
                        message = `field ${field} failed validation.`;
                        status = "error";
                        result = {
                            data: {
                                validation: {
                                    error: true,
                                    field: `${data.rule.field}`,
                                    field_value: 'd',
                                    condition: "eq",
                                    condition_value: "a"
                                }
                            }
                        };
                    }
                    return { result, message, status };
                }
                break;

            case "contains":
                if (data.data[5]) {
                    if (data.data[5].includes(data.rule.condition_value)) {
                        message = `field ${field} successfully validated.`;
                        status = "success";
                        result = {
                            data: data.data
                        };
                    } else {
                        message = `field ${field} failed validation.`;
                        status = "error";
                        result = {
                            data: data.data
                        };
                    }

                } else {
                    message = `field ${field} is missing from data.`;
                    status = "error";
                    result = {
                        data: null
                    };
                    return { result, message, status };
                }

                break;

            default:
                throw new AppError("Unknown condition to validate", null, 400);
        }
        throw new AppError("Could not validate rules.");
    }
}
