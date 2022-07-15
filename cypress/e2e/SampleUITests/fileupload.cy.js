describe('File upload use case ',()=>{
    it('Simple File upload test',()=>{
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        
        const yourFixturePath = 'karate.txt'
        cy.get('#fileUpload').attachFile(yourFixturePath)

        
    })

    it('Drag and drop File upload test',()=>{
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        
        const yourFixturePath = 'Untitled.png'
        cy.get('#file').attachFile(yourFixturePath)
        cy.get('.box__success').should('contain.text','Done!')
   
    })

    it('Multiple File upload test',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        
        const yourFixturePath = 'Untitled.png'
        const yourFixturePath1 = 'karate.txt'
        const yourFixturePath2 = 'example.json'
        cy.get('#filesToUpload')
        .attachFile([yourFixturePath,yourFixturePath1,yourFixturePath2])
        cy.wait(4000)
   
    })

    it('Change Name File upload test',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        
        const yourFixturePath = 'Untitled.png'
        const yourNewFixtureName = 'test.jpeg'
        cy.get('#filesToUpload')
        .attachFile({ filePath: yourFixturePath, fileName: yourNewFixtureName })
        cy.wait(4000)
   
    })

    

})