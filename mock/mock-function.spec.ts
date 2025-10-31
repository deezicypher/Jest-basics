describe('Mockk function examples', ()=>{
    it('should create a basic mock function', () => {
        const mockFn = jest.fn()
        mockFn.mockReturnValue(4)

        expect(mockFn()).toBe(4)
        expect(mockFn.mock.calls.length).toBe(1)
        expect(mockFn).toHaveBeenCalled()
    })

    it('Should create a mockfn with an argument', () => {
        const mockCreateSong = jest.fn((CreateSongDTO) => CreateSongDTO)
        expect(mockCreateSong({title:"Joy is coming"})).toEqual({title:"Joy is coming"})
    })

    it('should create a mockfunction with an argument with mock implementation', () => {
        const mockCreateSong = jest.fn()
        mockCreateSong.mockImplementation((createSong) => (
            {...createSong, id:1}
        ))
        expect(mockCreateSong({title:'Time'})).toEqual({title:'Time',id:1})
    })
})

