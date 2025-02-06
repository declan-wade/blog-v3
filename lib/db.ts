'use server'

import { PrismaClient } from '@prisma/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'
import dayjs, { Dayjs } from 'dayjs'

const libsql = createClient({
    url: `${process.env.TURSO_DATABASE_URL}`,
    authToken: `${process.env.TURSO_AUTH_TOKEN}`,
})

const adapter = new PrismaLibSQL(libsql)
const prisma = new PrismaClient({ adapter })

export async function getPosts() {
    const response = await prisma.post.findMany({
        where: {
            type: "blog"
        },
        take: 5
    })
    return response
}

export async function getAll() {
    const response = await prisma.post.findMany({
    })
    return response
}

export async function getProjects() {
    const response = await prisma.post.findMany({
        where: {
            type: "project"
        },
        take: 5
    })
    return response
}

export async function getPost(id: number) {
    const response = await prisma.post.findUnique({
        where: {
            id: id
        }
    })
    return response
}

export async function createPost(content: string, title: string, type: string, date: Date | undefined) {
    const response = await prisma.post.create({
        data: {
            content: content,
            title: title,
            type: type,
            datecreated: date
        }
    })
    return response
}

export async function updatePost(content: string, title: string, type: string, date: Date | undefined, id: number) {
    const response = await prisma.post.update({
        where: {
            id: id
        },
        data: {
            content: content,
            title: title,
            type: type,
            datecreated: date
        }
    })
    return response
}