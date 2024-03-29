import { SubmitFeedbackService } from "./submit-feedback-service";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeeback = new SubmitFeedbackService(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe('Submit feedback', () =>{
    it('should be able to submit a feedback', async () => {
        await expect(submitFeeback.execute({
            type: 'BUG',
            comment: 'exemplo comment',
            screenshot: 'test.jpg',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should be able to submit a feedback without type', async () => {
        await expect(submitFeeback.execute({
            type: '',
            comment: 'exemplo comment',
            screenshot: 'test.jpg',
        })).rejects.toThrow();
    });

    it('should be able to submit a feedback without comment', async () => {
        await expect(submitFeeback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'test.jpg',
        })).rejects.toThrow();
    });

    it('should be able to submit a feedback without screenshot', async () => {
        await expect(submitFeeback.execute({
            type: 'BUG',
            comment: 'está tudo bugado',
            screenshot: '',
        })).rejects.toThrow();
    });
});