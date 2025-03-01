import { HttpStatus } from "@nestjs/common/enums/http-status.enum";
import { HttpException } from "@nestjs/common/exceptions/http.exception";

export class ObjectNotFoundException extends HttpException {
  constructor(text : String) {
    super(`${text} não foi encontrad(a)o !!`, HttpStatus.NOT_FOUND);
  }
}