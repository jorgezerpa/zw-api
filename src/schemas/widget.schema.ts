import Joi from 'joi'

const id=Joi.number();
const title=Joi.string().min(3).max(30);
const description=Joi.string().max(100);
const video=Joi.string().max(100);
const file=Joi.string().max(100);
const image=Joi.string().max(100);

const createWidgetSchema=Joi.object({
    title:title.required(),
    description: description.required(),
    videoId:video,
    fileId: file,
    imageId: image,
});

const updateWidgetSchema=Joi.object({
    title:title,
    description: description,
    videoId:video,
    fileId: file,
    imageId: image,
});

const getWidgetSchema=Joi.object({
    id:id.required()
});

export {createWidgetSchema, getWidgetSchema, updateWidgetSchema}