import { Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateAuthInput } from "./dto/create-auth.input";
import { UpdateAuthInput } from "./dto/update-auth.input";
import { Sign } from "crypto";
import { SignInInput } from "./dto/signin.input";
import { PrismaService } from "src/prisma/prisma.service";
import { verify } from "argon2";
import { JwtService } from "@nestjs/jwt";
import { AuthJwtPayload } from "./types/jwtPayload";
import { ac, P } from "@faker-js/faker/dist/airline-BUL6NtOJ";
import { User } from "@prisma/client";

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwt: JwtService
  ) {}

  async validateLocalUser({ email, password }: SignInInput): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { email }
    });
    if (!user) throw new UnauthorizedException("User not found");
    const passwordMatch = await verify(user.password, password);
    if (!passwordMatch) throw new UnauthorizedException("Invalid password");

    return user;
  }

  async generateToken(userId: number) {
    const payload: AuthJwtPayload = { sub: userId };
    const accessToken = await this.jwt.signAsync(payload);
    return { accessToken };
  }
  async login(user: User) {
    const { accessToken } = await this.generateToken(user.id);

    return {
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      accessToken
    };
  }

  async validateJwtUser(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId }
    });
    if (!user) throw new UnauthorizedException("User not found");
    const currentUser = { id: user.id };
    return currentUser;
  }
}
