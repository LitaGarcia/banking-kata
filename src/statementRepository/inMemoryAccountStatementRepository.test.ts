import {describe, expect} from "@jest/globals";
import {InMemoryAccountStatementRepository} from "./inMemoryAccountStatementRepository.ts";
import {StatementRepository} from "../interfaces/interfaces.ts";
import {Statement} from "../account/account.ts";

describe('inMemoryAccountStatementRepository', () => {
    it('should return an empty array if does not exist an statement', () => {
    //given
    const inMemoryAccountStatementRepository: StatementRepository = new InMemoryAccountStatementRepository()
    //when
    const findAll: Statement[] | string = inMemoryAccountStatementRepository.findAll()
    //then
    const result: [] = [];
    expect(findAll).toEqual(result)
    })
    }
)