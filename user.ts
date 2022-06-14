// accountInfo
// charInfo
// playerInfo

type AccountInfo = {
    id: number;
    name: string;
    email?: string;
}

const account: AccountInfo = {
    id: 123,
    name: "Rafa"
}

type CharInfo = {
    nickname: string;
    level: number
}

const char: CharInfo = {
    nickname: 'Rafa',
    level: 100
}

// intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
    id: 123,
    name: 'Rafael',
    nickname: 'Rafa',
    level: 100
}