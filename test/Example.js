const {expect} = require('chai');
const {ethers} = require('ethers');

describe('Example', async ()=>{
  beforeEach(async()=>{
    const Example = await ethers.getContractFactory('Example');
    const counter = await Example.deploy()
  })
  describe('Deployment',async ()=>{
    it('sets the initial count',async ()=>{
        expect(await counter.setcount()).to.equal(1);
    })
    it('sets the initial name',async ()=>{
        expect(await counter.setname()).to.equal('kousick');
    })
    it('increments the count', async ()=>{
        expect(await counter.increment()).to.equal(2);
    })
    it('decrements the count', async ()=>[
        expect(await counter.decrement()).to.equal(0)
    ])

  })
})