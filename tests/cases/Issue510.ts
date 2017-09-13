    // Factory functions

    const createZombie = ({
        status = 1,
        width = 10,
        height = 10,
        xPosition,
        yPosition,
        color = "green"
    }) => ({
        status,
        width,
        height,
        xPosition,
        yPosition,
        color
    });

    const createHero = ({
        status = 1,
        width = 25,
        height = 50,
        xPosition,
        yPosition,
        color = "red"
    }) => ({
        status,
        width,
        height,
        xPosition,
        yPosition,
        color
    });