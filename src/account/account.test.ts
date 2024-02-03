describe('account', () => {
    it('should deposit an amount in a balance of the account', () => {
    //given
    const accountNumber: number = 12317
    const balance: number = 1000;
    const amount: number = 100;

    //when
    const account = new Account(accountNumber, balance);
    account.deposit(100)

    //then
    expect(account.balance).toEqual(1100)
    })
    }
)