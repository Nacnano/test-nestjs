import { Controller, Get, Redirect } from "@nestjs/common";

@Controller()
export class MainController {
  @Get()
  @Redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
  async redirect(): Promise<object> {
    return { url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" };
  }
}
