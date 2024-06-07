export interface sendCreateTeam {
    email: string
    permissions: string[]
    name: string
}


export interface DeleteTeamUser {
    id: string
}

export interface EditTeamUser {
    id: string
    permissions: string[]
}
