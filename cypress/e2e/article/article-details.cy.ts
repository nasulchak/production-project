let currentArticleId = '';
describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });
    after(() => {
        cy.removeArticle(currentArticleId);
    });

    it('И видит содержимое статьи', () => {
        cy.getByTestId('ArticleDetails.info').should('exist');
    });
    it('И видит список рекомендаций', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it('И осталвяет комментарий', () => {
        cy.getByTestId('ArticleDetails.info').should('exist');
        cy.getByTestId('AddComentForm').scrollIntoView();
        cy.addComment('Text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('И ставит оценку (пример со стабом на фикстурах)', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
        cy.getByTestId('ArticleDetails.info').should('exist');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(5, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 5);
    });
});
