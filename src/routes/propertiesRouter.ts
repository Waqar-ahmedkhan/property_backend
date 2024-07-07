import express from 'express';

const router = express.Router();

router.route('/').get()
router.route('/:id').get()
router.route('/:id').post()
router.route('/').patch()
router.route('/').delete()

export default router;
