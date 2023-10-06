describe('Cadastro', ()=>{
    it('Usuário deve se tornar um entregador', ()=>{
        cy.viewport(1440,900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome: 'Eron Moraes',
            cpf: '00000000041',
            email: 'eron@teste.com',
            whatsapp: '12999999999',
            endereco:{
                cep: '12220690',
                rua: 'Rua Uberlândia',
                numero: '500',
                complemento: 'Ap 44E',
                bairro: 'Jardim Ismênia',
                cidade_uf: 'São José dos Campos/SP'

            },
            metodo_entrega: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type(entregador.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        
        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get(':nth-child(5) > :nth-child(1) > input').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)

        cy.contains('.delivery-method li', entregador.metodo_entrega).click()

        cy.get('input[accept^="image"]').attachFile('/imagens/' + entregador.cnh)
        


    })
})