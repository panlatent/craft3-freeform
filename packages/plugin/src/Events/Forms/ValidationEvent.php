<?php

namespace Solspace\Freeform\Events\Forms;

use Solspace\Freeform\Events\CancelableArrayableEvent;
use Solspace\Freeform\Library\Composer\Components\Form;

class ValidationEvent extends CancelableArrayableEvent
{
    /** @var Form */
    private $form;

    private $validationOverride = false;

    public function __construct(Form $form)
    {
        $this->form = $form;

        parent::__construct([]);
    }

    public function setValidationOverride(bool $value): self
    {
        $this->validationOverride = $value;
        $this->isValid = false;

        return $this;
    }

    public function getForm(): Form
    {
        return $this->form;
    }

    public function getValidationOverride(): bool
    {
        return $this->validationOverride;
    }

    public function fields(): array
    {
        return ['form', 'validationOverride'];
    }
}
