import * as Schemas from "../../schemas"

export const profileAdminStub = (): Schemas.Profile.Profile => {
  return {
    name: 'Admin',
    isActive: true,
    access: [
      {
        name: 'user_crud',
        label: 'User Administrator',
        hasAccess: true,
        actions: [
          {
            name: 'create',
            label: 'Create',
            hasAccess: true
          },
          {
            name: 'find',
            label: 'See data',
            hasAccess: true
          },
          {
            name: 'delete',
            label: 'Delete',
            hasAccess: true
          },
          {
            name: 'update',
            label: 'Update',
            hasAccess: true
          },
        ]
      },
      {
        name: 'pacient_crud',
        label: 'Pacient Administrator',
        hasAccess: true,
        actions: [
          {
            name: 'create',
            label: 'Create',
            hasAccess: true
          },
          {
            name: 'find',
            label: 'See data',
            hasAccess: true
          },
          {
            name: 'delete',
            label: 'Delete',
            hasAccess: true
          },
          {
            name: 'update',
            label: 'Update',
            hasAccess: true
          },
        ]
      },
    ]
  }
}