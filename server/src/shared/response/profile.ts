import { ApiProperty } from "@nestjs/swagger";

import * as Schemas from "../../schemas"
import * as Stubs from "../stubs"

export class ProfileSaveResponse {
  
  @ApiProperty({
    example: { ...Stubs.Profile.profileAdminStub() }
  })
  profile: Schemas.Profile.Profile;

}

export class ProfileSaveAsResponse {

  @ApiProperty({
    example: { ...Stubs.Profile.profileAdminStub() }
  })
  profile: Schemas.Profile.Profile;

}

export class ProfileFindOne {

  @ApiProperty({
    example: { ...Stubs.Profile.profileAdminStub() }
  })
  profile: Schemas.Profile.Profile;

}

export class ProfileFind {

  @ApiProperty({
    example: [{ ...Stubs.Profile.profileAdminStub() }]
  })
  profiles: Schemas.Profile.Profile[];

}