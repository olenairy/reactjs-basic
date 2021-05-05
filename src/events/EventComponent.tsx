const EventComponent: React.FC = () => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
    const onDragStart = (event:  React.DragEvent<HTMLDivElement>) => {
        console.log('i am being dragged')
    }
    return (
        <div>
            <input onChange={onChange} />
            <div draggable onDragStart={onDragStart}>Dragg Me!</div>
        </div>
    )
}

export default EventComponent