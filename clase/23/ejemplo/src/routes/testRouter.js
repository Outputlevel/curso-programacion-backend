import {Router} from 'express';
import { DictonaryService } from '../services/dictonaryServices.js';

const dictonaryServices = new DictonaryService();
const router = Router();

router.param('word', async (req, res, next, word) => {
    const searchWord = dictonaryServices.findWord(word);

    req.word = null;
    if (searchWord) {
        req.word = searchWord;
    }

    next();
});

router.get('/:word([a-z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)', async(req, res) => {
    const {word} = req.params;
    res.send({ word })
});

router.get('/:word([a-z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)/:language([a-z][a-z])', async(req, res) => {
    res.send({
        definition: req.word
    })
});

router.put('/:word ([a-z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)', async(req, res)=>{

});

router.delete('/:word([a-z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)', async(req, res)=>{

});

router.get('*', (req, res) => {
    res.status(400).send({
        error: 'Cannot get the specified word'
    });
})

export default router;