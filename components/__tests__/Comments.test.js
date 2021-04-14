import React from 'react'
import Comments from '../Comments'
import { getByRole, getByText, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('New Comment Testing', () => {

    test("name input contains initial value of '' ", () => {
        const { getByTestId } = render(<Comments/>)
        const nameInputEl = getByTestId('name-input')

        expect(nameInputEl.value).toBe("")
    })

    test("new comment input contains initial value of '' ", () => {
        const { getByTestId } = render(<Comments/>)
        const newCommentInputEl = getByTestId('new-comment-input')

        expect(newCommentInputEl.value).toBe("")
    })

    test("add comment button renders with correct text", () => {
        const { getByRole } = render(<Comments/>)
        const addCommentBtnEl = getByRole("button", { name: 'Add Your Comment'})

        expect(addCommentBtnEl.textContent).toBe("Add Your Comment")
    })


    test("changing value of name input works correctly", () => {
        const { getByTestId } = render(<Comments/>)
        const nameInputEl = getByTestId('name-input')

        expect(nameInputEl.value).toBe("")

        fireEvent.change(nameInputEl, {
            target: {
                value: "Karina"
            }
        });
        expect(nameInputEl.value).toBe("Karina")
    })

    // Not working b/c fetches not integrating with testing. 
    // test("clicking the add your comment button increases the comment counter", () => {
    //     const { getByTestId } = render(<Comments/>)
    //     const addCommentBtnEl = getByTestId('add-comment-btn')
    //     const commentCounterEl = getByTestId('comment-counter')
    //     const commentCounterValue = commentCounterEl.value

    //     fireEvent.submit(addCommentBtnEl)

    //     expect(commentCounterValue).toBeGreaterThan(commentCounterValue)
    // })

    // Failing until Test can Fetch
    // test("reply comment button renders with correct text", () => {
    //     const { getByRole } = render(<Comments/>)
    //     const replyCommentBtnEl = getByRole("button", { name: 'Reply'})

    //     expect(replyCommentBtnEl.textContent).toBe("Reply")
    // })

    // Failing until Test can Fetch
    // test("delete comment button renders with correct text", () => {
    //     const { getByTestId } = render(<Comments/>)
    //     const deleteCommentBtnEl = getByTestId('del-btn')

    //     expect(deleteCommentBtnEl.textContent).toBe("Delete")
    // })

})



