#!/usr/bin/env ts-node

/**
 *   Wechaty - https://github.com/wechaty/wechaty
 *
 *   @copyright 2016-2018 Huan LI <zixia@zixia.net>
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 *
 */
// tslint:disable:no-shadowed-variable
import test  from 'blue-tape'

import {
  PuppetManager,
}                 from './puppet-manager'

test('resolve an unsupported puppet name', async t => {
  // try {
  //   await PuppetManager.resolve('fasdfsfasfsfdfs')
  //   t.fail('should reject')
  // } catch (e) {
  //   t.pass('reject when options is a string: ' + e)
  // }

  try {
    await PuppetManager.resolve({ puppet: 'fadfdsafa' as any })
    t.fail('should reject')
  } catch (e) {
    t.pass('reject when options.puppet is unknown: ' + e)
  }

  try {
    await PuppetManager.resolve({ puppet: 'wechaty-puppet-mock' })
    t.pass('should allow "wechaty-puppet-mock" as puppet name')
  } catch (e) {
    t.fail('should pass "mock" as puppet name')
  }
})
