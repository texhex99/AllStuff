var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composite = Matter.Composite,
        Composites = Matter.Composites,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Body = Matter.Body,
        Box = Bodies.rectangle(500, 300, 200, 10, { isStatic: true })

    // create engine
    var engine = Engine.create(),
        world = engine.world;

    // create renderer
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 800,
            height: 600,
            showAngleIndicator: false
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    var particleOptions = {
        friction: 0.05,
        frictionStatic: 0.1,
        render: { visible: true }
    };
    var Things = Composites.softBody(250, 100, 5, 5, 0, 0, true, 18, particleOptions)
        World.add(world, [
            Things,
            Composites.softBody(400, 300, 8, 3, 0, 0, true, 15, particleOptions),
            Composites.softBody(250, 400, 4, 4, 0, 0, true, 15, particleOptions),
            // walls
            Bodies.rectangle(400, 0, 2000, 50, { isStatic: true }),
            Bodies.rectangle(400, 1000, 2000, 50, { isStatic: true }),
            Bodies.rectangle(800+260, 500, 50, 1000, { isStatic: true }),
            Bodies.rectangle(-260, 500, 50, 1000, { isStatic: true }),
            Box,
            Bodies.circle(500, 200, 10)
        ]);
        Body.rotate(Box, 90)


    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.9,
                render: {
                    visible: false
                }
            }
        });

    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 800, y: 1000 }
    });
